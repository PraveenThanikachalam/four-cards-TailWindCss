import Cards from "./components/Cards";
import SupervisorImage from "../public/icon-supervisor.svg"
import TeamBuilderImage from "../public/icon-team-builder.svg"
import KarmaImage from "../public/icon-karma.svg"
import Calculator from "../public/icon-calculator.svg"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-16">
      <div className=" w-full flex flex-col  items-center justify-center pt-[80px]">
        <h1 className="text-4xl font-light font-sans tracking-wide text-gray-600">
          Reliable, efficient delivery
        </h1>
        <h1 className="text-4xl font-bold tracking-normal mt-2 text-gray-600">
          Powered by Technology
        </h1>
        <p className="break-words text-lg text-center text-gray-400 font-sans mt-5 ">
          Lorem ipsum dolor sit amet, quis nostrud <br /> exercitation ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w-full flex md:flex-row gap-10 flex-col h-[500px] md:mt-8  mt-72   justify-center  items-center    ">
        <div>
          <Cards
            color="#5df597"
            title={"Supervisor"}
            description={" Lorem ipsum dolor sit amet, quisnostrud  ex eacommodo consequat."} image={{
              url: SupervisorImage,
              alt: "Supervisor"
            }}          />
        </div>
        <div className="flex flex-col gap-10">
          <Cards
            color="red"
            title={"Team Builder"}
            description={" Lorem ipsum dolor sit amet, quisnostrud  ex eacommodo consequat."} image={{
              url: TeamBuilderImage,
              alt: "Team Builder"
            }}            
          />
          <Cards
            color="yellow"
            title={"Karma"}
            description={" Lorem ipsum dolor sit amet, quisnostrud  ex eacommodo consequat."} image={{
              url: KarmaImage,
              alt: "Karma"
            }}          />
        </div>
        <div>
          <Cards
            color="#479ef5"
            title={"Calculator"}
            description={" Lorem ipsum dolor sit amet, quisnostrud  eacommodo consequat."} image={{
              url: Calculator,
              alt: "Calculator"
            }}          />
        </div>
      </div>
    </div>
  );
}

export default App;
