// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StoreLineSvg from '@airclass/icons-svg/lib/asn/StoreLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StoreLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StoreLineSvg}></AntdIcon>;
};

StoreLine.displayName = 'StoreLine';
StoreLine.inheritAttrs = false;
export default StoreLine;