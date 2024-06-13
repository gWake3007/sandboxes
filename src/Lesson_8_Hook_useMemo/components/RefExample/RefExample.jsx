import { useRef } from "react";

const RefExample = () => {
  //   const refForm = useRef();
  //   console.log(refForm);
  //   useEffect(() => {
  //     console.log(refForm);
  //   }, [refForm]);

  const refInput = useRef();

  const handleClick = () => {
    refInput.current.focus();
  };
  return (
    <div>
      <button onClick={handleClick}>Scroll to form</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
        architecto exercitationem reprehenderit culpa et, dolores corrupti
        consequuntur tenetur sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim eius architecto exercitationem reprehenderit
        culpa et, dolores corrupti consequuntur tenetur sequi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Enim eius architecto
        exercitationem reprehenderit culpa et, dolores corrupti consequuntur
        tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim eius architecto exercitationem reprehenderit culpa et, dolores
        corrupti consequuntur tenetur sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Enim eius architecto exercitationem
        reprehenderit culpa et, dolores corrupti consequuntur tenetur sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
        architecto exercitationem reprehenderit culpa et, dolores corrupti
        consequuntur tenetur sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim eius architecto exercitationem reprehenderit
        culpa et, dolores corrupti consequuntur tenetur sequi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Enim eius architecto
        exercitationem reprehenderit culpa et, dolores corrupti consequuntur
        tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim eius architecto exercitationem reprehenderit culpa et, dolores
        corrupti consequuntur tenetur sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Enim eius architecto exercitationem
        reprehenderit culpa et, dolores corrupti consequuntur tenetur sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
        architecto exercitationem reprehenderit culpa et, dolores corrupti
        consequuntur tenetur sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim eius architecto exercitationem reprehenderit
        culpa et, dolores corrupti consequuntur tenetur sequi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Enim eius architecto
        exercitationem reprehenderit culpa et, dolores corrupti consequuntur
        tenetur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim eius architecto exercitationem reprehenderit culpa et, dolores
        corrupti consequuntur tenetur sequi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Enim eius architecto exercitationem
        reprehenderit culpa et, dolores corrupti consequuntur tenetur sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
        architecto exercitationem reprehenderit culpa et, dolores corrupti
        consequuntur tenetur sequi. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim eius architecto exercitationem reprehenderit
        culpa et, dolores corrupti consequuntur tenetur sequi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Enim eius architecto
        exercitationem reprehenderit culpa et, dolores corrupti consequuntur
        tenetur sequi.
      </p>
      <form>
        <input type="email" name="email" id="email" ref={refInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefExample;

//?Хук useRef - це теж саме що і qwerySelector але в Реакті!
//?В useEffect наш refDiv відображається тому що useRef після запису не перерундериться. Тому перша консоль undefined.
//?Щоб звернутись до useRef наприклад до refInput треба використовувати current.
