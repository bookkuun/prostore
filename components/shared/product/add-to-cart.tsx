"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { CartItem } from "@/types";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.message) {
      toast(res.message);
      return;
    }

    toast(res.message);
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
