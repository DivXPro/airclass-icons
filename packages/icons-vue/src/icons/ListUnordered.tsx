// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ListUnorderedSvg from '@airclass/icons-svg/lib/asn/ListUnordered';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListUnordered = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ListUnorderedSvg}></AntdIcon>;
};

ListUnordered.displayName = 'ListUnordered';
ListUnordered.inheritAttrs = false;
export default ListUnordered;