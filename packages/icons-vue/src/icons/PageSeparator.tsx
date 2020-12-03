// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PageSeparatorSvg from '@airclass/icons-svg/lib/asn/PageSeparator';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PageSeparator = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PageSeparatorSvg}></AntdIcon>;
};

PageSeparator.displayName = 'PageSeparator';
PageSeparator.inheritAttrs = false;
export default PageSeparator;