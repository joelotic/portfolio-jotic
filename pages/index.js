import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Blog1 from "../src/components/Blog1";
import Certification from "../src/components/Certification";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Layouts from "../src/layouts/Layouts";
const Work = dynamic(() => import("../src/components/Work"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layouts bodyCls={"dark fullscreendark"}>
      {/* Back To Home Ends [ONLY MOBILE] */}
      {/* Home Section Starts */}
      <Home />
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <About />
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <Work />
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <Contact />
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <Blog />
      <Certification/>
      {<Blog1/>}
    </Layouts>
  );
};
export default Index;
