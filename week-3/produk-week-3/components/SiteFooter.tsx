interface SiteFooterProps {
  namaProduk: string;
}

export default function SiteFooter({ namaProduk }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t">
      <p className="mx-auto max-w-6xl p-4 text-sm text-gray-600">
        &copy; {namaProduk}
      </p>
    </footer>
  );
}