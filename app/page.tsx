const BRAND = {
  name: "Doctor J’s Cuts",
  city: "Tallahassee, FL",
  instagram: "https://www.instagram.com/_doctorjscuts_/?hl=en",
  phoneDisplay: "(850) 000-0000",
  phoneHref: "tel:+18500000000",
  bookingUrl: "https://ig.me/m/_doctorjscuts_",
  addressLine: "Tallahassee, FL",
};

export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0b0b0b",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px"
    }}>

      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Precision Cuts. Clean Fades.
      </h1>

      <p style={{ color: "#ccc", marginBottom: "30px" }}>
        Modern grooming services in Tallahassee.
      </p>

      <a
        href={BRAND.bookingUrl}
        target="_blank"
        style={{
          display: "inline-block",
          padding: "14px 24px",
          backgroundColor: "#D4AF37",
          color: "black",
          fontWeight: "bold",
          borderRadius: "30px",
          textDecoration: "none"
        }}
      >
        DM to Book
      </a>

      <section style={{ marginTop: "60px" }}>
        <h2>Services</h2>
        <ul style={{ lineHeight: "2" }}>
          <li>Standard Haircut</li>
          <li>Haircut + Beard</li>
          <li>Lineup / Edge Up</li>
          <li>Kids Cut</li>
          <li>Custom Styles</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Contact</h2>
        <p>{BRAND.city}</p>
        <a href={BRAND.instagram} target="_blank" style={{ color: "#D4AF37" }}>
          View Instagram
        </a>
      </section>

    </main>
  );
}
