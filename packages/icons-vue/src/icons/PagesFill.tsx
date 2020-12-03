// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PagesFillSvg from '@airclass/icons-svg/lib/asn/PagesFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PagesFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PagesFillSvg}></AntdIcon>;
};

PagesFill.displayName = 'PagesFill';
PagesFill.inheritAttrs = false;
export default PagesFill;