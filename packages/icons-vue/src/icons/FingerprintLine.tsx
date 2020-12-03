// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FingerprintLineSvg from '@airclass/icons-svg/lib/asn/FingerprintLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FingerprintLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerprintLineSvg}></AntdIcon>;
};

FingerprintLine.displayName = 'FingerprintLine';
FingerprintLine.inheritAttrs = false;
export default FingerprintLine;