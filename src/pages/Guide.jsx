import {Divider,Tooltip} from '@mui/material'

const Guide = () => {
    return (
        <>
            <div className='columns m-0 mt-3 is-multiline welcome__master lightborder'>




                <div className='column is-12'>



                    <article className="message is-info my-3 has-text-left lightborder" style={{direction: 'ltr'}}>
                        <div className="message-header">
                            <p className='has-text-white'>About Project</p>

                        </div>
                        <div className="message-body">
                            <aside className="menu">
                                <p className="menu-label has-text-centered">
                                    General
                                </p>
                                <p className='is-size-6 my-6'>
                                    This project is a custom panel to manage clinics web page. in future new features can and will be added to this project.
                                </p>
                                <p className="menu-label has-text-centered">
                                    Technologies Involved
                                </p>
                                <ul className="menu-list">
                                    <li>Back-end</li>
                                    <li>

                                        <ul>Server-side Language : PHP 8.1</ul>
                                        <ul>Framework : phalcon 5</ul>
                                        <ul>Database : MariaDB</ul>
                                    </li>

                                </ul>

                                <ul className="menu-list">
                                    <li>Front-end</li>
                                    <li>

                                        <ul>Front-end Language : JS</ul>
                                        <ul>Framework : React 18.2</ul>
                                        <ul>

                                            <li>
                                                Key Libraries
                                            </li>

                                            <ul>
                                                Redux: 5.0.1
                                            </ul>
                                            <ul>
                                                React-redux: 9.1
                                            </ul>
                                            <ul>
                                                React-router-dom: 6.22
                                            </ul>
                                            <ul>
                                                React-leaflet: 4.2.1
                                            </ul>
                                            <ul>
                                                Formik: 2.4.5
                                            </ul>


                                        </ul>
                                    </li>

                                </ul>

                                <Divider>
                                    May.18,2024
                                    <Tooltip title='< Coded By : Ramin Hasani  />'>
                                        .
                                    </Tooltip>


                                </Divider>


                            </aside>
                        </div>
                    </article>

                </div>


            </div>

        </>
    )
}
export default Guide;