// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterLineSvg from '@airclass/icons-svg/lib/asn/PrinterLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterLineSvg}></AntdIcon>;
};

PrinterLine.displayName = 'PrinterLine';
PrinterLine.inheritAttrs = false;
export default PrinterLine;