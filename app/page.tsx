import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

interface HomeProps {
  children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
  return (
    <>
      <div className="container mx-auto pt-12 max-w-lg">
        <div className="flex justify-between align-center">
          <h1 className="text-4xl font-bold text-center float-center mb-6">
            Stockhood
          </h1>
          <Link href="/search">
            <Button variant={"outline"}>
              <AiOutlineSearch size={24} />
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold leading-7 mb-4">Portfolio</h1>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">$123,123</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardContent className="flex justify-between items-start py-2 px-4">
            <div>
              <h2 className="text-xl font-semibold">PLTR</h2>
              <p className="text-sm text-muted-foreground">
                Palantir Technologies
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold block">$40</span>
              <span className="text-sm text-muted-foreground">
                $320 (30 stocks)
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      {children}
    </>
  );
}
