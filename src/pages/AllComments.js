import { useParams } from "react-router";

const AllComments = () => {
    const params = useParams();
  return (
    <div>
          <h1>{`${params.quoteId} Comments`}</h1>
    </div>
  );
};
export default AllComments;
