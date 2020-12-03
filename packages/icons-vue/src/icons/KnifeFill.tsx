// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KnifeFillSvg from '@airclass/icons-svg/lib/asn/KnifeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KnifeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KnifeFillSvg}></AntdIcon>;
};

KnifeFill.displayName = 'KnifeFill';
KnifeFill.inheritAttrs = false;
export default KnifeFill;