import Link from 'next/link';

export function GetHelpNow() {
  return (
    <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-xl my-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-rose-900 font-bold text-lg">Need help right now?</h2>
          <p className="text-rose-800 text-sm mt-1 max-w-xl leading-relaxed">
            If you are in a crisis or need immediate support, please reach out to professional emergency services or trusted adults. You are not alone.
          </p>
        </div>
        <Link
          href="/crisis-support"
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors whitespace-nowrap text-center focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          aria-label="Get immediate crisis support"
        >
          Get Help Now
        </Link>
      </div>
    </div>
  );
}
