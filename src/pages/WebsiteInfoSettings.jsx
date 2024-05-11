import {webpageoptions, updateWebpageoptions} from '../services/service'
import React, {useEffect, useRef, useState} from "react";
import {Spinner} from "../components";
import {useSelector} from "react-redux";
import { userinfoSelector} from "../slices/UserSlice";
import {toast} from "react-toastify";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from "yup";

import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import {useNavigate} from 'react-router-dom'

const WebsiteInfoSettings = () => {


    const nav = useNavigate()





    const dataneeded = useSelector(userinfoSelector)
    const status = useSelector((state) => state.userinfo.status)
    const [options, setoptions] = useState(false)


    const getdata = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${dataneeded.user.token}`
            }
        }


        const response = await webpageoptions(config)
        if (response) {

            if (response.data.code === 1) {
                console.log(response.data)
                setoptions(response.data.options)
                setnewPosition([Number(response.data.options.lat), Number(response.data.options.lng)])


            } else {
                toast.error(response.data.error)
            }

        } else {
            toast.error('اتصال خود به شبکه را بررسی کرده و مجددا تلاش کنید.')
        }
    }


    useEffect(() => {
        if (status !== 'done') {
            nav('/');
            toast.error('ابتدا وارد سیستم شو🤔')


        } else {
            getdata().then()
        }


    }, []);


    // map related
    const mapRef = useRef();
    const position = [Number(options.lat), Number(options.lng)];
    const [newposition, setnewPosition] = useState(false)

    function LocationMarker() {

        const map = useMapEvents({
            click(e) {
                setnewPosition([e.latlng.lat, e.latlng.lng])

            },

        })

        return position === null ? null : (
            <Marker position={newposition ? newposition : position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }


    const handleupdate = async (values, position) => {
        const config = {
            headers: {
                Authorization: `Bearer ${dataneeded.user.token}`
            }
        }


        const conf = window.confirm('آیا از اعمال تغییرات مطمن هستید ؟')
        if (conf) {
            const formdata = new FormData()
            formdata.append("h1", values.h1)
            formdata.append("footer", values.footer_blue)
            formdata.append("phone", values.phone)
            formdata.append("address", values.address)
            formdata.append("instagram", values.instagram)
            formdata.append("subtitle", values.subtitle)
            formdata.append("about_text", values.about)
            formdata.append("lat", position[0])
            formdata.append("lng", position[1])


            const response = await updateWebpageoptions(formdata, config)
            if (response) {
                if (response.data.code === 1) {
                    toast.success('تغییرات با موفقیت اعمال شد');
                    // to refetch data
                    getdata()
                }
            } else {
                toast.error('مشکلی در ارتباط پیش آمده است')
            }
        }


    }


    // shwoing specific content for each website based on env

    let content
    if (options !== false) {


        content = <Formik key={1} initialValues={{
            h1: options.h1,
            subtitle: options.subtitle,
            footer_blue: options.footer,

            phone: options.phone,
            address: options.address,
            instagram: options.instagram,



            about: options.about_text,

            rules: options.rules,
        }} validationSchema={Yup.object().shape({

            h1: Yup.string().required('ضروری').max(150, 'باید کمتر از 150 کاراکتر باشد'),
            subtitle: Yup.string().required('ضروری').max(200, 'باید کمتر از 200 کاراکتر باشد'),
            footer_blue: Yup.string().required('ضروری').max(250, 'باید کمتر از 250 کاراکتر باشد'),

            phone: Yup.string().length(11, 'شماره درست وارد نشده است')
                .required('ضروری'),
            address: Yup.string().required('ضروری').max(200, 'باید کمتر از 200 کاراکتر باشد'),
            instagram: Yup.string().required('ضروری').max(100, 'باید کمتر از 100 کاراکتر باشد'),

            about: Yup.string().required('ضروری').max(2000, 'باید کمتر از 2000 کاراکتر باشد'),


        })} onSubmit={(values) => handleupdate(values, newposition)}>
            {({errors, touched}) => (
                <Form className=''>


                    <label className='label mt-3 yekan' aria-hidden="true">عنوان اصلی سایت</label>
                    <Field className='yekan input my-2' type="text" id="h1" name="h1"
                    />
                    <ErrorMessage component='span' className='has-text-danger yekan mx-auto'
                                  name='email'/>


                    <label className='label mt-3 yekan' aria-hidden="true">عناون فرعی</label>
                    <Field className='yekan input my-2' type="text" id="subtitle" name="subtitle"


                    />
                    <ErrorMessage component='span' className='has-text-danger yekan' name='subtitle'/>


                    <label className='label mt-3 yekan' aria-hidden="true">متن توضیحی فوتر </label>
                    <Field className='yekan textarea my-2' type="text" id="footer_blue" name="footer_blue"
                           as='textarea' rows='5'

                    />
                    <ErrorMessage component='span' className='has-text-danger yekan' name='footer_blue'/>




                    <label className='label mt-3 yekan' aria-hidden="true">شماره تماس</label>
                    <Field className='yekan input my-2' type="tel" id="phone" name="phone"/>
                    <ErrorMessage component='span' className='has-text-danger yekan' name='phone'/>


                    <label className='label mt-3 yekan' aria-hidden="true">آدرس</label>
                    <Field className='yekan input my-2' type="text" id="address" name="address"/>
                    <ErrorMessage component='span' className='has-text-danger yekan' name='address'/>


                    <label className='label mt-3 yekan' aria-hidden="true">اینستاگرام</label>
                    <Field className='yekan input my-2' type="text" id="instagram" name="instagram"/>
                    <ErrorMessage component='span' className='has-text-danger yekan' name='instagram'/>





                    <label className='label mt-3 yekan' aria-hidden="true">متن درباره ما</label>
                    <Field className='yekan textarea my-2' as='textarea' rows='5' type="text" id="about" name="about"/>
                    <ErrorMessage component='span' className='has-text-danger yekan' name='about'/>






                    {/*map*/}
                    <div className='mt-4' style={{height: '21.18rem'}}>
                        <label className='label mt-3 yekan' aria-hidden="true">آدرس دفتر ( قابل مشاهده در صفحه تماس با
                            ما)</label>

                        <MapContainer ref={mapRef} className='cardboxborder' center={position} zoom={11.6}
                                      scrollWheelZoom={false} style={{height: '100%', borderRadius: '0.9rem'}}>
                            <TileLayer

                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker/>

                        </MapContainer>

                    </div>


                    <button className='button clrone has-text-weight-bold  pinar mt-6 ' type='submit'>ثبت تغییرات
                    </button>


                </Form>


            )}


        </Formik>


    } else {
        content = <Spinner/>
    }


    return (
        <>
            <div className='columns mt-3 px-4 pb-3 is-multiline welcome__master' style={{maxHeight: "100%"}}>

                <div className='column is-12 '>
                    <h1 className='has-text-centered pinar is-size-4 clrtwotext has-text-weight-bold'>
                        تنظیمات کلی وبسایت

                    </h1>

                    <article className='subtitle yekan my-3 is-size-6'>
                        در این قسمت تنظیمات کلی سایت (مانند عناوین و اطلاعات تماس) قابل مشاهده و ویرایش میباشد.
                    </article>


                </div>

                <div className='column is-12 p-6 lightborder borderrad1'>
                    {
                        content
                    }
                </div>


            </div>


        </>
    )
}
export default WebsiteInfoSettings;