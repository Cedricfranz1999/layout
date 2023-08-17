/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Layouts from "~/pages/component/Layout";
import AuthenticatedRoute from "~/pages/protection.tsx/protection";
import { api } from "~/utils/api";
import { Card, Image, Row } from "antd";

export default function Order() {
  const { data, isLoading, refetch } = api.product.getAll.useQuery();
  console.log(data, "TEXT");

  return (
    <AuthenticatedRoute>
      <Layouts>
        <Card className=" w- flex items-center justify-center">
          <Row gutter={[16, 16]}>
            {" "}
            {data?.map((data) => {
              return (
                <>
                  <Card
                    title={data.description}
                    className="  bg-green      h-72    w-72    bg-gradient-to-b from-white via-gray-300 to-red-500 p-20  text-center  "
                  >
                    <Image
                      className="  h-full w-full bg-transparent  "
                      src={data.imageUrl}
                    />
                  </Card>
                </>
              );
            })}
          </Row>
        </Card>
      </Layouts>
    </AuthenticatedRoute>
  );
}
