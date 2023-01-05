import ThemeButton from "../../ThemeBtn/Button";
import Tabs from "./tabs/Tabs";
// import VideoOnes from "../../../assets/saimAli.mp4"

function SuccessStories() {
  return (
    <>
    {/* scroll component  */}
      <Tabs
      videoSourceOne="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        videoSourceTwo="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        videoSourceThree="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />

      <div className="text-center mt-4 mb-5 pt-5 pb-5">
      <ThemeButton data="LOAD MORE" classes=""/>
      </div>
    </>
  );
}

export default SuccessStories;