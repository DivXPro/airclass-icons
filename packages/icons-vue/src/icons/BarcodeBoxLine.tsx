// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarcodeBoxLineSvg from '@airclass/icons-svg/lib/asn/BarcodeBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeBoxLineSvg}></AntdIcon>;
};

BarcodeBoxLine.displayName = 'BarcodeBoxLine';
BarcodeBoxLine.inheritAttrs = false;
export default BarcodeBoxLine;