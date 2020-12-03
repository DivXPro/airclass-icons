// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BodyScanFillSvg from '@airclass/icons-svg/lib/asn/BodyScanFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BodyScanFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BodyScanFillSvg}></AntdIcon>;
};

BodyScanFill.displayName = 'BodyScanFill';
BodyScanFill.inheritAttrs = false;
export default BodyScanFill;