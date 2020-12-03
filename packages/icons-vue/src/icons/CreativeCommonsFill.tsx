// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CreativeCommonsFillSvg from '@airclass/icons-svg/lib/asn/CreativeCommonsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreativeCommonsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsFillSvg}></AntdIcon>;
};

CreativeCommonsFill.displayName = 'CreativeCommonsFill';
CreativeCommonsFill.inheritAttrs = false;
export default CreativeCommonsFill;