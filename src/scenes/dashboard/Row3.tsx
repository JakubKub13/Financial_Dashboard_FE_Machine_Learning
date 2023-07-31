import DashboardBox from "@/components/DashboardBox"
import { useGetProductsQuery, useGetTransactionsQuery, useGetKpisQuery } from "@/state/api"


const Row3 = () => {
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  

  return (
    <>
    <DashboardBox gridArea="g"></DashboardBox>
    <DashboardBox gridArea="h"></DashboardBox>
    <DashboardBox gridArea="i"></DashboardBox>
    <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3