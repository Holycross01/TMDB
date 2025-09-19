import Components from "./components/components";

export default function Home() {
  console.log("Base URL:", process.env.NEXT_PUBLIC_ENDPOINT);
console.log("Token exists?", !!process.env.NEXT_API_TOKEN);
  return (
  <div>
    <Components/>
 </div>
  );
}
