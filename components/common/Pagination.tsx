import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = ({
  page,
  setPage,
  data,
}: {
  page: number;
  setPage: (page: number) => void;
  data: any;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isActive={page !== 1}
            onClick={() =>
              page !== 1 ? setPage(page - 1) : () => null
            }
            className="cursor-pointer select-none"
          />
        </PaginationItem>
        {Array.from({
          length: Math.ceil(data.length / 5),
        }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={page === index + 1}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            isActive={page !== Math.ceil(data.length / 5)}
            onClick={() =>
              page !== Math.ceil(data.length / 5)
                ? setPage(page + 1)
                : () => null
            }
            className="cursor-pointer select-none"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
