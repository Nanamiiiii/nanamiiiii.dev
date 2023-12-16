import { Button, HStack, Link } from "@chakra-ui/react"

type Props = {
  totalCounts: number
  nowPage?: number 
}

const PAGE_SIZE = 10

export const Pagenation = ({ totalCounts, nowPage=1 }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const pageCount = Math.ceil(totalCounts / PAGE_SIZE)
  return (
    <>
      <HStack spacing={3} justifyContent="center">
        {
          range(1, pageCount).map((number, idx) => 
            <Link key={idx} href={`/blogs/page/${number}`}>
              <Button variant={number == nowPage ? 'outline' : 'solid'} colorScheme="gray" size="sm">
                {number}
              </Button>
            </Link>
          )
        }
      </HStack>
    </>
  )
}