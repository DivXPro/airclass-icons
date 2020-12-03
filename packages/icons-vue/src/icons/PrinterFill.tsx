// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterFillSvg from '@airclass/icons-svg/lib/asn/PrinterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterFillSvg}></AntdIcon>;
};

PrinterFill.displayName = 'PrinterFill';
PrinterFill.inheritAttrs = false;
export default PrinterFill;