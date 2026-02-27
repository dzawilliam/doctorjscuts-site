export const metadata = {
  title: "Doctor J’s Cuts | Tallahassee Barber",
  description:
    "Precision cuts, clean fades, and sharp lineups in Tallahassee. DM to book your appointment."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
