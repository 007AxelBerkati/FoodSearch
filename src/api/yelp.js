import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer YU0cyH1az4anHPNsK4KSNjyM4NTqRVQsb_dxGZYnbZnWVaxrWXDHXfuWnWClZV2A1AHSIuIAsC_vU5lbBdM9tpOFG9SkcFXd64GUNEQmayBKcnrQO-zkRJy_5l_xYXYx",
  },
});
