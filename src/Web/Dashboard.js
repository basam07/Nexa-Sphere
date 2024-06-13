import React, { useState } from "react";
import "./Dashboard.css"; // Import your CSS file for styling

const DashboardForm = () => {
  //   const handleSubmit = () => {
  //     console.log("generate text");
  //   };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button clicked with value:", inputValue);
    // Perform any action here, like submitting the form
  };
  const handlePrompt = () => {
    window.location.href = "/generate";
    // Perform any action here, like submitting the form
  };

  return (
    <div className="page">
      <div className="search-container">
        <div className="inline">
        <h2 className="heading">Nexa Sphere</h2>
        <button className="search-btn" onClick={handlePrompt}>Prompt</button>
        </div>
        <div className="box">
          <div>
            <p className="generate-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              malesuada risus quis erat laoreet volutpat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc mi risus, accumsan quis
              arcu ac, finibus feugiat orci. Aenean elementum placerat dolor, eu
              luctus enim. Nullam varius augue eu dapibus porttitor. Etiam metus
              lacus, tristique vel metus quis, feugiat feugiat nulla. Donec
              rutrum, velit eget sollicitudin eleifend, arcu purus semper elit,
              et ullamcorper dui velit et risus. Nam eleifend dui sit amet ipsum
              viverra volutpat. Quisque egestas convallis vehicula. Nulla ut
              neque sed diam imperdiet vehicula. Aliquam posuere nisi metus, sit
              amet facilisis magna egestas at. Sed et dui aliquam, tempus mauris
              in, molestie libero. Ut vel tellus felis. In ac risus auctor,
              maximus urna imperdiet, cursus enim. Aliquam viverra dolor eu
              justo suscipit scelerisque. In venenatis nisl ante, quis convallis
              mi ultricies a. Morbi vel mattis orci. Nunc eget odio vestibulum,
              gravida velit non, gravida dolor. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Fusce vel sapien eget mi
              scelerisque fermentum ut et leo. Donec lacus justo, vulputate ut
              arcu vel, accumsan congue risus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Aliquam pulvinar orci tincidunt
              risus fringilla, eu placerat risus facilisis. Mauris hendrerit
              sodales efficitur. Aenean nunc sapien, vestibulum faucibus
              volutpat eu, fringilla ut sem. Etiam eu tellus aliquam, hendrerit
              turpis eget, condimentum quam. Vivamus cursus dui quis magna
              efficitur, sed blandit est pretium. Praesent ornare sapien magna,
              et pulvinar massa vestibulum sed. Praesent vitae urna et sem
              auctor ultricies. Duis finibus vel lectus nec tincidunt. Nam
              vehicula mauris ac quam auctor, sed porttitor nulla venenatis.
              Quisque molestie in diam sit amet auctor. In tempus, libero nec
              ultricies viverra, sapien lorem interdum velit, et aliquet turpis
              odio at erat. Nulla elementum lectus ut orci iaculis rutrum.
              Maecenas at faucibus felis. Nunc libero magna, vestibulum nec
              tincidunt ac, mollis quis mi. Curabitur quis eros eget justo
              suscipit pellentesque. Donec efficitur ligula lectus, sed interdum
              justo rutrum in. Nulla facilisis pharetra augue, nec maximus dui
              tincidunt eget. Aliquam erat volutpat. Mauris molestie urna lorem,
              sit amet dignissim nibh consequat eget. Cras vulputate enim sed
              turpis vulputate, sed sollicitudin tortor egestas. Etiam iaculis
              eros quis dolor pretium imperdiet. Sed tincidunt augue ac est
              cursus, sit amet pharetra dolor lobortis. Donec at dui ac sem
              lobortis tempus at vel enim. Nullam ac felis sed justo viverra
              cursus sed feugiat nisl. Curabitur sit amet nunc eros. Suspendisse
              auctor nulla sed sem luctus, quis tristique erat consequat.
              Vestibulum dignissim nibh velit, ut placerat lorem ullamcorper in.
              Cras mattis erat at dui sollicitudin viverra. Nunc nec lectus nec
              sem cursus vulputate vel sed nibh. Praesent cursus urna vitae
              turpis mattis, ut tincidunt nisl aliquam. Praesent ac scelerisque
              eros. Nullam fringilla nisl id nisl aliquam, accumsan sodales
              purus lacinia. Praesent mattis ipsum ut efficitur semper. Aenean
              ut nulla nec ex porta vehicula. Vivamus ut luctus erat, non
              accumsan sapien. Integer sed pulvinar sem. Fusce tincidunt neque
              urna, vel consectetur risus placerat laoreet. Fusce a tempus orci.
              Ut.
            </p>
          </div>
          <div className="search">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type something..."
            />
            <button className="search-btn" onClick={handleButtonClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardForm;
