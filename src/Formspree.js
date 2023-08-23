export function Formspree() {
    return(
        <div>
      <fieldset className="heading">
         <legend>Send us a message</legend>
         <form
            action="https://formspree.io/f/mzbwzkoo"
            method="POST">
            <div className="heading">
               <label>
               Your email:
               <input className="none" type="email" name="email" placeholder="Your email..."/>
               </label>
            </div>
            <div className="heading">
               <label>
               Your message:
               <textarea  className="none" name="message" placeholder="Text your message..."></textarea>
               </label>
            </div>
            <div className="heading">
               <button type="submit">Send</button>
            </div>
         </form>
      </fieldset>
        </div>
    )
}


