export default {
    name: 'project',
    title: 'project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'projectImage',
            title: 'Project image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}