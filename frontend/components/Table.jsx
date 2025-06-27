const Table = () => {
  return (
    <section className="w-[90%] lg:w-[87%] mx-auto py-10 space-y-4">
      <h2 className="text-[1.1rem] lg:text-[1.4rem] font-semibold uppercase text-black">
        Engineering Studies
      </h2>

      <div className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Process Hazard Analysis */}
          <div className="bg-white p-4 lg:p-6 rounded-[.5rem] space-y-2 border border-neutral-400">
            <h3 className="text-[1rem] lg:text-[1.2rem] font-medium text-black">
              Process Hazard Analysis
            </h3>
            <ul className="text-[1rem] lg:text-[1.2rem] text-neutral-600 space-y-1">
              <li>Hazid</li>
              <li>Hazop</li>
              <li>Envid</li>
              <li>Phser</li>
              <li>Simops/mopp/bowtie</li>
              <li>Ohid/ohra/hra</li>
            </ul>
          </div>

          {/* Risk Assessment */}
          <div className="bg-white p-4 lg:p-6 rounded-[.5rem] space-y-2 border border-neutral-400">
            <h3 className="text-[1rem] lg:text-[1.2rem] font-medium text-black">
              Risk Assessment
            </h3>
            <ul className="text-[1rem] lg:text-[1.2rem] text-neutral-600 space-y-1">
              <li>Gas & smoke dispersion study</li>
              <li>Fera</li>
              <li>Flare radiation and dispersion</li>
              <li>Eesa</li>
              <li>Eera</li>
              <li>Alarp</li>
              <li>Qra</li>
            </ul>
          </div>

          {/* Loss Prevention Activities */}
          <div className="bg-white p-4 lg:p-6 rounded-[.5rem] space-y-2 border border-neutral-400">
            <h3 className="text-[1rem] lg:text-[1.2rem] font-medium text-black">
              Loss Prevention Activities
            </h3>
            <ul className="text-[1rem] lg:text-[1.2rem] text-neutral-600 space-y-1">
              <li>Hazardous area classification</li>
              <li>Fire and gas mapping</li>
              <li>Fire water estimation</li>
              <li>Passive fire protection</li>
              <li>Fire and safety equipment layout</li>
              <li>Escape route layout</li>
              <li>Noise and vibration study</li>
            </ul>
          </div>
        </div>

        {/* Functional Safety Studies */}
        <div className="bg-white p-4 lg:p-6 rounded-[.5rem] border border-neutral-400 space-y-2">
          <h3 className="text-[1rem] lg:text-[1.2rem] font-medium text-black">
            Functional Safety Studies
          </h3>
          <ul className="list-disc list-inside text-[1rem] lg:text-[1.2rem] text-neutral-600 space-y-1">
            <li>Ram - reliability, availability & maintainability</li>
            <li>
              Safety integrity level (SIL) - classification, verification,
              validation
            </li>
            <li>Failure modes effect & criticality analysis (FMEA & FMECA)</li>
            <li>Reliability centered maintenance (RCM)</li>
            <li>Plc validation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Table;
