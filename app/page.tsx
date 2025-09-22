import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="flex flex-1 flex-col items-center px-4 py-16 sm:px-6 text-center gap-20">
        <div className="max-w-4xl space-y-8 relative">
          {/* Gradient BG */}
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50
                to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20
                rounded-3xl blur-3xl scale-150 opacity-60"
          ></div>

          <div className="max-w-4xl space-y-8 relative">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Connect instantly.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Chat smarter.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              doloribus, harum quaerat omnis, possimus atque nam qui fuga
              perferendis eum voluptatum, numquam quo impedit dolorem soluta
              iste repellendus odio voluptatem!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="text-lg px-8 py-6 h-auto:">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          <div className="pt-8">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    73M+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Active Users
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    1B+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    contributors
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    4M+
                  </dt>
                  <dd className="font-light text-gray-500 dark:text-gray-400">
                    Messages Sent
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
