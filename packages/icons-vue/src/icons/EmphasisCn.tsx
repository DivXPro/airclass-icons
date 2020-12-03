// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmphasisCnSvg from '@airclass/icons-svg/lib/asn/EmphasisCn';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EmphasisCn = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmphasisCnSvg}></AntdIcon>;
};

EmphasisCn.displayName = 'EmphasisCn';
EmphasisCn.inheritAttrs = false;
export default EmphasisCn;