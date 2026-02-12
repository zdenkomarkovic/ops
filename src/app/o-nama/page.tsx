import About from "@/components/About";
import AboutImages from "@/components/AboutImages";
import Mission from "@/components/Mission";
import Biography from "@/components/Biography";
import HippocraticOath from "@/components/HippocraticOath";
import EtickiKodeks from "@/components/EtickiKodeks";

export default function ONamaPage() {
  return (
    <>
      <About />;
      <Mission />
      <Biography />
      <HippocraticOath />
      <EtickiKodeks />
      <AboutImages />
    </>
  );
}
