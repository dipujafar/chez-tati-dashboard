const TermsContainer = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-6xl font-bold">Terms of use.</h1>
      <p className="max-w-7xl text-primary-gray">
        Welcome to [Your Company Name]. Before using our logo design service,
        please carefully review the following Terms and Conditions, as they
        govern the contractual relationship between yous and [Your Company
        Name]. By using our logo design service, you acknowledge that you have
        read, understood, and agreed to these Terms and Conditions in their
        entirety.
      </p>

      <h1 className="mb-10 text-6xl font-bold">→ Scope of Service</h1>
      <div>
        <p className="mb-5 max-w-7xl text-primary-gray">
          a. [Your Company Name] will provide custom logo design services to the
          Client based on the specifications provided by the Client.
        </p>
        <p className="max-w-7xl text-primary-gray">
          b. The Service Provider will deliver the final logo design in the
          agreed-upon format upon completion and full payment of the service
          fee.
        </p>
      </div>

      <h1 className="mb-10 text-6xl font-bold">→ Copyright and Ownership</h1>
      <div>
        <p className="mb-5 max-w-7xl text-primary-gray">
          a. The Client acknowledges that all rights, title, and ownership of
          the final logo design will belong solely to the Client after full
          payment has been received by the Service Provider.
        </p>
        <p className="mb-5 max-w-7xl text-primary-gray">
          b. Final payment ensures that only the agreed design becomes the
          client’s property. Any previous ideas/concepts remain the property of
          The Service Provider, unless any prior agreement has been made.
        </p>
        <p className="max-w-7xl text-primary-gray">
          c. The Service Provider reserves the right to showcase the completed
          logo design in their portfolio or promotional materials.
        </p>
      </div>
    </div>
  );
};

export default TermsContainer;
