const ReactDOM = {
    render: (dom, container, fn) => {
        container.append(dom);

        fn && fn();
    }
};

export default ReactDOM;