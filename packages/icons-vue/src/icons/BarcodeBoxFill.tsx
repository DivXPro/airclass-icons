// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BarcodeBoxFillSvg from '@airclass/icons-svg/lib/asn/BarcodeBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarcodeBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeBoxFillSvg}></AntdIcon>;
};

BarcodeBoxFill.displayName = 'BarcodeBoxFill';
BarcodeBoxFill.inheritAttrs = false;
export default BarcodeBoxFill;