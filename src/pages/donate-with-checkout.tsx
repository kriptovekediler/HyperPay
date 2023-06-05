import { NextPage } from "next";

import Layout from "@/components/Layout";
import CheckOutForm from "@/components/CheckOutForm";

const DonatePage: NextPage = () => {
  return (
    <Layout
    title="Donate With Anypay">
        <div className="page-container">
            <h1>Donate with AnyPay</h1>
            <p>Donate to our project 💖</p>
            <CheckOutForm/>
        </div>
    </Layout>
  )
}

export default DonatePage