// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ListCheckSvg from '@airclass/icons-svg/lib/asn/ListCheck';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListCheck = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ListCheckSvg}></AntdIcon>;
};

ListCheck.displayName = 'ListCheck';
ListCheck.inheritAttrs = false;
export default ListCheck;