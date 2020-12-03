// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RefreshLineSvg from '@airclass/icons-svg/lib/asn/RefreshLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RefreshLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLineSvg}></AntdIcon>;
};

RefreshLine.displayName = 'RefreshLine';
RefreshLine.inheritAttrs = false;
export default RefreshLine;