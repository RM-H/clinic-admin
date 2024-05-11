


const Salonetable = ({children}) => {

    return (
        <>
            <div className='column is-12 p-3'>
                <div className='welcome__master p-3' style={{width: '100%', height: '100%'}}>

                    <h4 className='pinar has-text-centered has-text-weight-bold my-3'>
                       سالن ها


                    </h4>


                    <table className='table width100'>
                        <thead className='clrtwo'>
                        <tr className=''>

                            <th className='has-text-centered has-text-white'>عنوان سالن</th>
                            <th className='has-text-centered has-text-white'>ظرفیت سالن</th>
                            <th className='has-text-centered has-text-white'>شهر </th>

                            <th className='has-text-centered has-text-white'>عملیات</th>


                        </tr>

                        </thead>

                        <tbody>

                        {
                            children
                        }



                        </tbody>
                    </table>


                </div>
            </div>


        </>
    )
}
export default Salonetable;
