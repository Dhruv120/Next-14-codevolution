"use client";
import { useRouter } from "next/navigation";

const Order = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <>
      <div>Order product</div>
      <button style={{ backgroundColor: "green" }} onClick={handleClick}>
        Click me{" "}
      </button>
    </>
  );
};

export default Order;
