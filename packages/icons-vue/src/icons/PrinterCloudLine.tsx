// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterCloudLineSvg from '@airclass/icons-svg/lib/asn/PrinterCloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterCloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterCloudLineSvg}></AntdIcon>;
};

PrinterCloudLine.displayName = 'PrinterCloudLine';
PrinterCloudLine.inheritAttrs = false;
export default PrinterCloudLine;