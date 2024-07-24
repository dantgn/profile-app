import React from 'react'

const Contact = () => {
    return (
        <section id="contact-me" className="container-blue">
            <h2 className="p-5 text-2xl">GET IN TOUCH</h2>
            <div className="mb-5">
                <a className='p-2' href="mailto:your_email@example.com">
                    <i className="fa fa-envelope fa-xl"></i>
                </a>
                <a className='p-2' href="#">
                    <i className="fa-brands fa-github fa-xl"></i>
                </a>
                <a className='p-2' href="#">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
            </div>
        </section>
    )
}

export default Contact
