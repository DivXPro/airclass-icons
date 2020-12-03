// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KnifeLineSvg from '@airclass/icons-svg/lib/asn/KnifeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KnifeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KnifeLineSvg}></AntdIcon>;
};

KnifeLine.displayName = 'KnifeLine';
KnifeLine.inheritAttrs = false;
export default KnifeLine;