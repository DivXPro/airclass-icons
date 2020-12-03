// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PrinterCloudFillSvg from '@airclass/icons-svg/lib/asn/PrinterCloudFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterCloudFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PrinterCloudFillSvg}></AntdIcon>;
};

PrinterCloudFill.displayName = 'PrinterCloudFill';
PrinterCloudFill.inheritAttrs = false;
export default PrinterCloudFill;