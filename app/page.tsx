import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-2xl mt-5 font-bold">Latihan NextJs & GraphQL</h1>
        <p className="mt-3">
          Selamat Datang <span className="font-bold">User!</span>
        </p>
        <Card className="w-1/3 mt-5">
          <CardContent className="flex flex-col gap-2 mt-5">
            <Link href="/login">
              <Button className="w-full">Login</Button>
            </Link>
            <Button>Register</Button>
          </CardContent>
        </Card>

        <Card className="w-1/3 mt-5">
          <CardContent className="flex flex-col gap-2 mt-5">
            <Link href="/profile">
              <Button className="w-full">Profile</Button>
            </Link>
            <Button>Password</Button>
            <Button variant="destructive">Logout</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
