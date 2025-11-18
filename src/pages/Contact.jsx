export const Contact = () => {
    const handleFormSubmit = (formData) =>{
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData)
        //here the handleFormSubmint object takes form input and passed as iterater (javascript iterator) the we cant simply typecast it to get our data in object form
    };
    return (
        <section className="section-contact">
            <h2 className="container-title">
                Contact Us
            </h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit}> {/* react 19 dev feature so that a chunk ammount of data cant be passed in backend very easily */}
                <input 
                        type="text" 
                        required
                        autoComplete="false" 
                        placeholder="Enter your name" 
                        name="username"
                />
                <input 
                        type="email" 
                        className="form-control"
                        placeholder="Enter your email" 
                        name="email"
                        required
                        autoComplete="false"
                />
                <textarea 
                        className="form-control"
                        rows="10"
                        required
                        autoComplete="false" 
                        placeholder="Enter your massage" 
                        name="massage"
                ></textarea>
                <button type="submit" value="send">Send</button>
            </form>
        </div>
        </section>
    )
}