// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StoreFillSvg from '@airclass/icons-svg/lib/asn/StoreFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StoreFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoreFillSvg}></AntdIcon>;
};

StoreFill.displayName = 'StoreFill';
StoreFill.inheritAttrs = false;
export default StoreFill;