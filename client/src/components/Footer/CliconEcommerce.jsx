import Logo from '@components/Header/Logo';

export default function CliconEcommerce() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <Logo className="mb-6" fillColor="#FA8232" />
      <p className="text-gray-500">Customer Supports:</p>
      <h3 className="text-white">(629) 555-0129</h3>
      <h3 className="text-gray-300 w-[248px]">
        4517 Washington Ave. Manchester, Kentucky 39495
      </h3>
      <h3 className="text-white">info@kinbo.com</h3>
    </div>
  );
}
