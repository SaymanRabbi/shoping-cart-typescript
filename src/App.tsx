// components
// import  Drawer  from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
// import  AddShoppingCart  from "@material-ui/icons/AddShoppingCart";
// import  Badge  from "@material-ui/core/Badge";
import { useQuery } from "react-query";
import { AppContainer } from "./app.style";
import Item from "./item";
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();
const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;
  return (
    <AppContainer>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  );
};

export default App;
