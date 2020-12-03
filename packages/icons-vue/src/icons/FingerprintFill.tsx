// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FingerprintFillSvg from '@airclass/icons-svg/lib/asn/FingerprintFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FingerprintFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerprintFillSvg}></AntdIcon>;
};

FingerprintFill.displayName = 'FingerprintFill';
FingerprintFill.inheritAttrs = false;
export default FingerprintFill;